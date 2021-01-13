
getCSS.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/style.css');
    request.onreadystatechange =()=>{
        if(request.readyState ===4 && request.status === 200){
            const style = document.createElement('style');
            style.innerHTML=request.response;
            document.head.appendChild(style)
        }
    }
    request.send();
}
getJS.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/popUps.js')
    request.onreadystatechange=()=>{
        if(request.readyState === 4&& request.status ===200){
            const script = document.createElement('script')
            script.innerHTML=request.response;
            document.body.appendChild(script);
        }
    }
    request.send();
}
getHTML.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/add.html');
    request.onreadystatechange =()=>{
        if(request.readyState ===4 && request.status ===200){
            const div = document.createElement('div')
            div.innerHTML=request.response;
            document.body.appendChild(div);
        }
    }
    request.send();
}
getXML.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/4.xml');
    request.onreadystatechange=()=>{
        if(request.readyState ===4 && request.status ===200){
            const xml = request.responseXML;
            const text = xml.getElementsByTagName('warning')[0].textContent;
            const div = document.createElement('div')
            div.innerHTML=request.response;
            document.body.appendChild(div);
        }
    }

    request.send()
}
getJSON.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/5.json');
    request.onreadystatechange=()=>{
        if(request.readyState ===4 && request.status ===200){
            const obj = JSON.parse(request.response);
            console.log(obj);
            const div = document.createElement('div');
            div.innerHTML='JSON数据加载完成，请在控制台查看';
            document.body.appendChild(div)

        }
    }

    request.send()
}
let n = 1;
nextPage.onclick=()=>{
    if(n<3){
        n=n+1;
        previousPage.disabled=false;
        if(n>=3){
            nextPage.disabled=true;
            n=3
        }else{
            nextPage.disabled=false;
        }
        const request = new XMLHttpRequest();
        request.open('GET',`/page${n}`);
        request.onreadystatechange=()=>{
            if(request.readyState ===4 && request.status ===200){
                const arr = JSON.parse(request.response);
                page.textContent=`第${arr[0].page}页`
                data.innerHTML=''
                arr.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent=item.id;
                    data.appendChild(li)
                });
            }
        }
        request.send()
        
    }

}
previousPage.onclick=()=>{
    if(n>=2){
        n-=1;
        nextPage.disabled=false;
        if(n===1){
            previousPage.disabled=true;
        }
        const request = new XMLHttpRequest();
        request.open('GET',`/page${n}`);
        request.onreadystatechange=()=>{
            if(request.readyState ===4 && request.status ===200){
                const arr = JSON.parse(request.response);
                page.textContent=`第${arr[0].page}页`
                data.innerHTML=''
                arr.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent=item.id;
                    data.appendChild(li)
                });
            }
        }
        request.send()
    }
}