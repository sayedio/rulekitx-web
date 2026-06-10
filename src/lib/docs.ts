import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Since gray-matter is highly useful for parsing frontmatter in markdown files,
// let's check if it is already installed or if we need to install it.
// Wait! Let's write a simple custom frontmatter parser to keep it super lightweight and robust,
// without requiring external dependencies that might need npm installs!
// Let's implement a simple parser:

export interface DocMetadata {
  title: string;
  description?: string;
  order?: number;
  slug: string;
}

export interface DocContent {
  metadata: DocMetadata;
  content: string;
}

const docsDirectory = path.join(process.cwd(), "src/content/docs");

export function getDocSlugs(): string[] {
  try {
    if (!fs.existsSync(docsDirectory)) {
      return [];
    }
    const files = fs.readdirSync(docsDirectory);
    return files
      .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
      .map((file) => file.replace(/\.mdx?$/, ""));
  } catch (err) {
    console.error("Error reading doc slugs:", err);
    return [];
  }
}

export function getDocBySlug(slug: string): DocContent | null {
  try {
    const fullPath1 = path.join(docsDirectory, `${slug}.mdx`);
    const fullPath2 = path.join(docsDirectory, `${slug}.md`);
    let fullPath = "";
    if (fs.existsSync(fullPath1)) {
      fullPath = fullPath1;
    } else if (fs.existsSync(fullPath2)) {
      fullPath = fullPath2;
    } else {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    
    // Parse frontmatter manually
    let metadata: Partial<DocMetadata> = { title: slug };
    let content = fileContents;

    if (fileContents.startsWith("---")) {
      const secondDashIndex = fileContents.indexOf("---", 3);
      if (secondDashIndex !== -1) {
        const frontmatterText = fileContents.substring(3, secondDashIndex);
        content = fileContents.substring(secondDashIndex + 3).trim();
        
        const lines = frontmatterText.split("\n");
        for (const line of lines) {
          const colonIndex = line.indexOf(":");
          if (colonIndex !== -1) {
            const key = line.substring(0, colonIndex).trim();
            let value = line.substring(colonIndex + 1).trim();
            if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
              value = value.substring(1, value.length - 1);
            }
            if (key === "title") metadata.title = value;
            if (key === "description") metadata.description = value;
            if (key === "order") metadata.order = parseInt(value, 10);
          }
        }
      }
    }

    return {
      metadata: {
        title: metadata.title || slug,
        description: metadata.description,
        order: metadata.order ?? 99,
        slug,
      },
      content,
    };
  } catch (err) {
    console.error("Error reading doc by slug:", err);
    return null;
  }
}

export function getAllDocs(): DocContent[] {
  const slugs = getDocSlugs();
  const docs = slugs
    .map((slug) => getDocBySlug(slug))
    .filter((doc): doc is DocContent => doc !== null);
  
  // Sort docs by order, then title
  return docs.sort((a, b) => {
    if (a.metadata.order !== b.metadata.order) {
      return (a.metadata.order ?? 99) - (b.metadata.order ?? 99);
    }
    return a.metadata.title.localeCompare(b.metadata.title);
  });
}
