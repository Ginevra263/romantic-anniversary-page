# 🚀 Guida al Deploy su GitHub Pages

## Passaggi da seguire per pubblicare il sito

### 1. Crea un repository su GitHub

1. Vai su [github.com](https://github.com) e fai login
2. Clicca sul pulsante **"New"** (verde) per creare un nuovo repository
3. Dai un nome al repository (ad esempio: `romantic-anniversary-page`)
4. Lascia il repository **pubblico** (necessario per GitHub Pages gratuito)
5. **NON** inizializzare con README, .gitignore o licenza
6. Clicca su **"Create repository"**

### 2. Collega il progetto locale a GitHub

Apri il terminale nella cartella del progetto ed esegui questi comandi:

```bash
# Inizializza git (se non l'hai già fatto)
git init

# Aggiungi tutti i file
git add .

# Crea il primo commit
git commit -m "Initial commit - Romantic Anniversary Page"

# Collega il repository remoto (sostituisci TUO-USERNAME con il tuo username GitHub)
git remote add origin https://github.com/TUO-USERNAME/romantic-anniversary-page.git

# Rinomina il branch in main (se necessario)
git branch -M main

# Pusha il codice su GitHub
git push -u origin main
```

### 3. Attiva GitHub Pages

1. Vai sul tuo repository su GitHub
2. Clicca su **"Settings"** (Impostazioni)
3. Nel menu di sinistra, clicca su **"Pages"**
4. Sotto "Build and deployment":
   - Source: seleziona **"GitHub Actions"**
5. Salva le modifiche

### 4. Verifica il Deploy

1. Vai nella tab **"Actions"** del tuo repository
2. Dovresti vedere il workflow "Deploy to GitHub Pages" in esecuzione
3. Attendi che il workflow finisca (circa 1-2 minuti)
4. Il tuo sito sarà disponibile a: `https://TUO-USERNAME.github.io/romantic-anniversary-page/`

## 🔄 Aggiornamenti futuri

Ogni volta che vuoi aggiornare il sito:

```bash
# Aggiungi i file modificati
git add .

# Crea un commit con una descrizione
git commit -m "Descrizione delle modifiche"

# Pusha su GitHub
git push
```

Il sito verrà automaticamente aggiornato in 1-2 minuti! ✨

## ⚠️ Nota importante

Se il nome del tuo repository è diverso da `romantic-anniversary-page`, devi aggiornare il file `vite.config.ts`:

```typescript
base: process.env.NODE_ENV === 'production' ? '/NOME-TUO-REPOSITORY/' : '/',
```

## 🎉 Fatto!

Una volta completati questi passaggi, il tuo progetto romantico sarà online e accessibile a chiunque!

---

💡 **Suggerimento**: Puoi anche configurare un dominio personalizzato nelle impostazioni di GitHub Pages se ne hai uno!
