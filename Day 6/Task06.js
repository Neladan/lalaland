module.exports = {
    objectsDeeplyEqual: function(cmp1, cmp2) {
            if (cmp1 === cmp2) {
              return true;
            }
            else if ((typeof cmp1 == "object" && cmp1 != null) && (typeof cmp2 == "object" && cmp2 != null)) {
              if (Object.keys(cmp1).length != Object.keys(cmp2).length)
                return false;
          
              for (var prop in cmp1) {
                if (cmp2.hasOwnProperty(prop))
                {  
                  if (! deepEqual(cmp1[prop], cmp2[prop]))
                    return false;
                }
                else
                  return false;
              }
              
              return true;
            }
            else 
              return false;
          
    }
    }