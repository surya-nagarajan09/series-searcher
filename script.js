document.getElementById("btn").addEventListener("click",search)


let outerdiv=document.createElement("div");
outerdiv.classList.add("outer-div");

async function search(){
    let query=document.getElementById("val").value;
    
    
   outerdiv.innerHTML="";

    
    let request=await fetch("https://api.tvmaze.com/search/shows?q="+query);
    let response=await request.json();
    console.log(response)


    if(response.length!==0)
    {
    

    for(let i=0;i<response.length;i++)
    {
   

    let innerdiv=document.createElement("div");
    innerdiv.classList.add("inner-div")
    
    
    //cretae banner
    let banner=document.createElement("img");
    banner.setAttribute("src",response[i].show.image.medium);
    banner.setAttribute("width","150");
    banner.setAttribute("height","150");
    banner.setAttribute("border", "5px solid");
    banner.setAttribute("border-radius","circle")
    banner.setAttribute("align", "center");
    //create title
    let title_of_series=document.createElement("p");
    title_of_series.innerHTML="Name:"+response[i].show.name;
    title_of_series.setAttribute("font-size","5px");
    title_of_series.setAttribute("text-color","white")
   
    //create genres
    let genres=document.createElement("p");
    genres.innerHTML="Genres:"+response[i].show.genres;
    
    // create language
    let lang=document.createElement("p");
    lang.innerHTML="Language:"+response[i].show.language;
    

    //create type
    let type=document.createElement("p");
    type.innerHTML="Type:"+response[i].show.type
   
    //creating run time
    let run_time=document.createElement("p")
    run_time.innerHTML="Run Time:"+response[i].show.runtime+"min";

    //creating premeried
    let pre=document.createElement("p")
    pre="Premiered:"+response[i].show.premiered+"min";
    
    innerdiv.append(banner,title_of_series,genres,lang,type,run_time,pre)
    outerdiv.append(innerdiv)
   
    document.body.append(outerdiv)
 
}
}else{
    alert("Not Found!! please try another")
}
    
    


  
}


    
    

