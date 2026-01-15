// Script para optimización post-build
// Este script agrega defer a scripts de terceros que bloquean el renderizado

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

function addDeferToCloudflareScripts(dir) {
  const files = readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = join(dir, file);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory()) {
      addDeferToCloudflareScripts(fullPath);
    } else if (file.endsWith('.html')) {
      let content = readFileSync(fullPath, 'utf8');
      
      // Agregar defer a scripts de Cloudflare
      const modified = content.replace(
        /<script src="([^"]*cloudflare-static[^"]*)"/g,
        '<script defer src="$1"'
      );
      
      if (content !== modified) {
        writeFileSync(fullPath, modified, 'utf8');
        console.log(`✓ Optimizado: ${file}`);
      }
    }
  });
}

try {
  addDeferToCloudflareScripts('./out');
  console.log('✅ Scripts de Cloudflare optimizados con defer');
} catch (error) {
  console.error('Error:', error);
}
