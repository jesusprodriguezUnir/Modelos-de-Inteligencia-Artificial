import re
from pathlib import Path

def fix_conflicts():
    filepath = Path('data/intelligence-index-master.json')
    text = filepath.read_text(encoding='utf-8')
    
    # Expresión regular para buscar bloques de conflicto de Git y quedarse con la parte entrante (remote)
    # <<<<<<< HEAD
    # ... (local)
    # =======
    # ... (remote) -> Esta es la que queremos conservar
    # >>>>>>> hash
    pattern = re.compile(r'<<<<<<< HEAD\n.*?\n=======\n(.*?)\n>>>>>>> [a-f0-9]+\n', re.DOTALL)
    
    cleaned, num_subs = pattern.subn(r'\1\n', text)
    
    if num_subs > 0:
        filepath.write_text(cleaned, encoding='utf-8')
        print(f"✅ Se han resuelto {num_subs} conflictos en {filepath.name}")
    else:
        print(f"No se encontraron más conflictos en {filepath.name}")

if __name__ == '__main__':
    fix_conflicts()
