import { PDFDocument } from 'pdf-lib';
import mammoth from 'mammoth';
import docx4js from 'docx4js';

/**
 * Extracts text from a given resume file.
 * Supports .pdf, .docx, and .doc (converted to .docx first).
 * @param {File} file - The uploaded resume file.
 * @returns {Promise<string>} Extracted text from the file.
 */
export async function extractResumeText(file) {
    if (!file) {
        console.error("No file provided.");
        return "";
    }

    const fileType = file.name.split(".").pop().toLowerCase();

    try {
        if (fileType === "pdf") {
            return await extractTextFromPDF(file);
        } else if (fileType === "docx") {
            return await extractTextFromDocx(file);
        } else if (fileType === "doc") {
            return await convertDocToDocxAndExtract(file);
        } else {
            console.error("Unsupported file type:", fileType);
            return "";
        }
    } catch (error) {
        console.error("Error extracting text:", error);
        return "";
    }
}

/** Extracts text from a PDF file */
async function extractTextFromPDF(file) {
    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    const text = await pdfDoc.getTextContent();
    return text.items.map(item => item.str).join(" ");
}

/** Extracts text from a DOCX file */
async function extractTextFromDocx(file) {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ buffer: arrayBuffer });
    return result.value;
}

/** Converts a DOC file to DOCX and extracts text */
async function convertDocToDocxAndExtract(file) {
    try {
        const arrayBuffer = await file.arrayBuffer();
        const doc = await docx4js.load(arrayBuffer);
        return doc.getFullText();
    } catch (error) {
        console.error("Error converting .doc to .docx:", error);
        return "";
    }
}
