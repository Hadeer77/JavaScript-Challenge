//solve this assignment with promise and AJAX/XMLHttpRequest...(first 5 articles only)
const getData = (apiLink)=>{
    return new Promise((resolve , reject)=>{
        let myRequest = new XMLHttpRequest();
        myRequest.onload = function(){
            if(this.readyState===4 && this.status === 200){
                resolve(JSON.parse(this.responseText));
            }else{
                reject(Error("data not found"));
            }
        };
        myRequest.open("GET", apiLink);
        myRequest.send();
    });
};
getData("articles.json").then((result)=>{
    result.length = 5;
    return result;
}).then((articles)=>{
    articles.forEach((article)=>{
        let mainDiv = document.createElement("div");
        let title = document.createElement("h3");
        let desc = document.createElement("p");

        title.appendChild(document.createTextNode(article.title));
        desc.appendChild(document.createTextNode(article.description));

        mainDiv.appendChild(title);
        mainDiv.appendChild(desc);

        document.body.appendChild(mainDiv);
    });
}).catch((reject)=>{
    console.log(reject);
});


//solve the same assignment with fetch api
fetch("articles.json")
.then((response)=> response.JSON())
.then((result)=>{
    result.length = 5;
    result.forEach((article)=>{
        let mainDiv = document.createElement("div");
        let title = document.createElement("h3");
        let desc = document.createElement("p");

        title.appendChild(document.createTextNode(article.title));
        desc.appendChild(document.createTextNode(article.description));

        mainDiv.appendChild(title);
        mainDiv.appendChild(desc);

        document.body.appendChild(mainDiv);
    });
}).catch((reject)=>{
    console.log(reject);
});
