    //hello world using javascript using dom manipulation

        // const root =document.getElementById("root"); //access root div from html into javascript
        // const h1= document.createElement("h1"); // create h1 tag using javascript
        // root.appendChild(h1);
        // h1.innerHTML="hello world using javascript using dom manipulation"
        
        // hello world using react js using cdn links

    //    creating a h1 tag using reacts cdn link
    const heading2 = React.createElement("h1",{},"hello world using react js")
    console.log(heading2.type,"\n\n",heading2.props.children);
    
    const root =ReactDOM.createRoot(document.getElementById("root"))

 //    passing headings variable inside root 
 //    root.render(heading2);
     const paragraph =React.createElement("p",{},"this is a paragraph")
     const h2 =React.createElement("h2",{},"this is a h2 tag")
     const div=React.createElement("div",{},[paragraph],[heading2],[h2])
     root.render(div)
