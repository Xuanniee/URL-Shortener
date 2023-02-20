/**
 * Function that checks whether a URL parsed is valid
 */
export function validateUrl(value) {
    // Checking URL Protocol
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+
          // Checking Domain Name
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
          // IP (V4) Address
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
          // Port & Path
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
          // Query String
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
          '(\\#[-a-z\\d_]*)?$','i');
  
        return !!urlPattern.test(value);
  }

