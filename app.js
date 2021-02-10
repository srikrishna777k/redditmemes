var after = "";

async function fetchMemes() {
    colorChange();
    if (document.getElementById("memes")) {
        document.getElementById("memes").remove();
    }
    let parentdiv = document.createElement("div");
    parentdiv.id = "memes";
    let response = await fetch(`https://www.reddit.com/r/memes.json?after=${after}`);
    let json = await response.json();
    after = json.data.after
    for (let i = 0; i < json.data.children.length; i++) {
        if (json.data.children[i].data.post_hint == "image") {
            let div = document.createElement("div");
            let h4 = document.createElement("h4");
            let image = document.createElement("img")
            image.src = json.data.children[i].data.url_overridden_by_dest;
            h4.textContent = json.data.children[i].data.title;
            div.appendChild(h4);
            div.appendChild(image);
            parentdiv.appendChild(div);
        }
    }
    document.body.appendChild(parentdiv);

}