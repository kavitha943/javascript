function countWords(words){
  const result={};
  for(i=0;i<words.length;i++){
    const word=words[i];
    if(!result[word]){
      console.log(!result[word]);
      result[word]=1;
    }
    else{
      result[word]++;
    }
  }
  return result;
}
console.log(countWords(['apple','banana','grapes','apple']));