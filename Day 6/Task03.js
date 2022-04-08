module.exports = {
    countGs: function(str) {
        var Gchar = 0;

        for ( var i = 0; i < str.length; i++)
        {
         if (str[i] == "G")
            Gchar +=1;
        else 
            Gchar = 0;
        }
        console.log(Gchar);
    }
    
}