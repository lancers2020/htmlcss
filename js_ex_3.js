function getter(array){
    let data;
    let capturedNamesForAge = [];
    let capturedNamesForLanguage = [];
    var i = 0;
    var j = 0;
    var k = 0;
    var age = 0;
    var hablaSpanish = 0;
    while(i < array.length){
        if(array[i].age > 30){
            age += 1;
            capturedNamesForAge.push(array[i].name);
        }
        i++;
    }
    while(k < array.length){
        while(j < array[k].languages.length){
            if(array[k].languages[j] == "spanish"){
                hablaSpanish += 1;
                capturedNamesForLanguage.push(array[k].name);
            }
            j++;
        }
        j = 0;
        k++;
    }
    return data = [age, hablaSpanish, capturedNamesForAge, capturedNamesForLanguage];
}