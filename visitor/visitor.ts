import { visitEachChild } from "typescript";

abstract class ResourceFile {
    protected filePath: string;
    public constructor(filePath: string) {
        this.filePath = filePath;
    }

    abstract accept(extractor: Visitor): void;
}

class PdfFile extends ResourceFile {
    constructor(filePath: string) {
        super(filePath);
    }

    accept(visitor: Visitor): void {
        visitor.visit(this);
    }
}

interface Visitor {
    visit(pdfFile: PdfFile): void;
}

class Extractor implements Visitor {
    visit(pdfFile: PdfFile): void {
        //...
    }
}

class Compressor implements Visitor {
    visit(pdfFile: PdfFile): void {
        //..
    }
}

const extractor = new Extractor();
const compressor = new Compressor();
const resoutFilew = new PdfFile('aaa');
resoutFilew.accept(extractor);