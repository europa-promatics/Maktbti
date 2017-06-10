export const LANGUAGE = {
ENGLISH: "en",
}
export interface Environment 
{
language: string;
endPoint:string;

}

export const DEV: Environment = {
language:LANGUAGE.ENGLISH,
endPoint:'http://europa.promaticstechnologies.com/audioLibrary/WebServices/' 

}

export const PROD: Environment = {
language:LANGUAGE.ENGLISH,
endPoint:'http://europa.promaticstechnologies.com/audioLibrary/WebServices/' 
}
export const ENV: Environment = DEV;