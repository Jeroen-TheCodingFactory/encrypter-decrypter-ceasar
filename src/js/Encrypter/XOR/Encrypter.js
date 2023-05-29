class Encrypter {
  toBinary(stringToEncrypt) {
    stringToEncrypt = stringToEncrypt.toUpperCase();
    let result = [];
    for (let i = 0; i < stringToEncrypt.length; i++) {
      switch (stringToEncrypt[i]) {
        case "A":
          result.push("01000001");
          break;
        case "B":
          result.push("01000010");
          break;
        case "C":
          result.push("01000011");
          break;
        case "D":
          result.push("01000100");
          break;
        case "E":
          result.push("01000101");
          break;
        case "F":
          result.push("01000110");
          break;

        case "G":
          result.push("01000111");
          break;

        case "H":
          result.push("01001000");
          break;

        case "I":
          result.push("01001001");
          break;

        case "J":
          result.push("01001010");
          break;

        case "K":
          result.push("01001011");
          break;

        case "L":
          result.push("01001100");
          break;

        case "M":
          result.push("01001101");
          break;

        case "N":
          result.push("01001110");
          break;

        case "O":
          result.push("01001111");
          break;

        case "P":
          result.push("01010000");
          break;

        case "Q":
          result.push("01010001");
          break;

        case "R":
          result.push("01010010");
          break;

        case "S":
          result.push("01010011");
          break;

        case "T":
          result.push("01010100");
          break;

        case "U":
          result.push("01010101");
          break;

        case "V":
          result.push("01010110");
          break;

        case "W":
          result.push("01010111");
          break;

        case "X":
          result.push("01011000");
          break;

        case "Y":
          result.push("01011001");
          break;
        case "Z":
          result.push("01011010");
          break;
        default:
          result.push(stringToEncrypt[i]);
          break;
      }
    }
    return result;
  }

  XORCheck(stringToConvert) {
    // let key = "11111111";
    let result = "";
    for (let i = 0; i < stringToConvert.length; i++) {
      switch (stringToConvert[i]) {
        case "0":
          result = result + "1";
          break;
        case "1":
          result = result + "0";
          break;
        default:
          return stringToConvert[i];
      }
    }
    return result.toString();
  }

  encrypt(stringToEncrypt) {
    let result = "";
    stringToEncrypt = this.toBinary(stringToEncrypt);
    for (let i = 0; i < stringToEncrypt.length; i++) {
      result = result + this.XORCheck(stringToEncrypt[i]);
    }
    return result;
  }
}
