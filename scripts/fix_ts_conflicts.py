import re
from pathlib import Path

def fix_ts_conflicts():
    filepath = Path('src/data/intelligence-index.ts')
    
    if not filepath.exists():
        print(f"Error: No se encuentra {filepath}")
        return

    text = filepath.read_text(encoding='utf-8')
    
    # Expresión regular para limpiar los conflictos de git en el .ts y quedarse con el bloque remoto (======= hasta >>>>>>>)
    pattern = re.compile(r'<<<<<<< HEAD\n.*?\n=======\n(.*?)\n>>>>>>> [a-f0-9]+\n', re.DOTALL)
    
    cleaned, num_subs = pattern.subn(r'\1\n', text)
    
    if num_subs > 0:
        filepath.write_text(cleaned, encoding='utf-8')
        print(f"✅ Se han resuelto {num_subs} conflictos en {filepath.name}")
    else:
        print(f"No se encontraron conflictos en {filepath.name} usando la primera regex. Probando alternativas...")
        
        # Ocasionalmente Git inserta conflictos sin un hash al final (ej. si el stash fue local)
        pattern2 = re.compile(r'<<<<<<<.*?\n=======\n(.*?)\n>>>>>>>.*?\n', re.DOTALL)
        cleaned, num_subs2 = pattern2.subn(r'\1\n', text)
        if num_subs2 > 0:
            filepath.write_text(cleaned, encoding='utf-8')
            print(f"✅ Se han resuelto {num_subs2} conflictos en {filepath.name} (regex alternativa)")
        else:
            print("Definitivamente no se encontraron marcadores de conflicto.")

if __name__ == '__main__':
    fix_ts_conflicts()
