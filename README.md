# 📸 QR Code Generator (Node.js)

A simple CLI tool that allows users to generate a **QR code** from any URL using Node.js. The tool:
- Prompts the user to enter a URL
- Saves the URL to a text file (`URL.txt`)
- Generates a QR code and saves it as an image (`qr_img.png`)

---

## 🔧 Requirements

- Node.js (v14 or higher recommended)
- npm

---

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/Ojas-Srivastava05/QRCodeGenerator.git
cd QRCodeGenerator
```

2. **Install dependencies**
```bash
npm install
```

> Make sure you have installed:
- `inquirer` (for user input)
- `qr-image` (to generate QR code)

---

## 🚀 Usage

Run the script:

```bash
node index.js
```

You'll be prompted to enter a URL. After entering the URL:
- A QR code image will be saved as `qr_img.png` in the current folder.
- The URL will also be saved in `URL.txt`.

---

## 📂 Output Example

```
Enter the URL to generate the QR Code: https://example.com
URL saved to URL.txt and QR code generated!
```

---

## 🛠 Tech Stack

- Node.js
- [inquirer](https://www.npmjs.com/package/inquirer)
- [qr-image](https://www.npmjs.com/package/qr-image)
- `fs` module (built-in)

---

## 📄 License

MIT License — free to use and modify.
