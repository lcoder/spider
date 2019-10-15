

export function isWhitespace(code: number): boolean {
    switch (code) {
      case 0x0009: // CHARACTER TABULATION
      case 0x000b: // LINE TABULATION
      case 0x000c: // FORM FEED
      case 32:
      case 160:
      case 5760:
      case 0x2000: // EN QUAD
      case 0x2001: // EM QUAD
      case 0x2002: // EN SPACE
      case 0x2003: // EM SPACE
      case 0x2004: // THREE-PER-EM SPACE
      case 0x2005: // FOUR-PER-EM SPACE
      case 0x2006: // SIX-PER-EM SPACE
      case 0x2007: // FIGURE SPACE
      case 0x2008: // PUNCTUATION SPACE
      case 0x2009: // THIN SPACE
      case 0x200a: // HAIR SPACE
      case 0x202f: // NARROW NO-BREAK SPACE
      case 0x205f: // MEDIUM MATHEMATICAL SPACE
      case 0x3000: // IDEOGRAPHIC SPACE
      case 0xfeff: // ZERO WIDTH NO-BREAK SPACE
        return true;
  
      default:
        return false;
    }
  }
  