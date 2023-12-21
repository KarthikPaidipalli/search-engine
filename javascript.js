let inputvalue = document.getElementById("searchInput");
let adding = document.getElementById("searchResults");
let a = document.getElementById("searchResults");

function appending(result) {
    let {
        link,
        title,
        description
    } = result;
    let divelement = document.createElement("div");
    divelement.classList.add("result-item");

    let titleelement = document.createElement("a");
    titleelement.textContent = title;
    titleelement.href = link;
    titleelement.target = "_blank";
    titleelement.classList.add("result-title");
    divelement.appendChild(titleelement);

    let firstbreak = document.createElement("br");
    divelement.appendChild(firstbreak);

    let linkelement = document.createElement("a");
    linkelement.textContent = link;
    linkelement.target = "_blank";
    linkelement.href = link;
    linkelement.classList.add("result-url");
    divelement.appendChild(linkelement);

    let second = document.createElement("br");
    divelement.appendChild(second);

    let para = document.createElement("p");
    para.textContent = description;
    para.classList.add("link-description");
    divelement.appendChild(para);

    a.appendChild(divelement);




}


function display(search_results) {
    for (let result of search_results) {
        appending(result);
    }
}

function searching(event) {
    if (event.key === "Enter") {
        adding.textContent = "";
        let url = "https://apis.ccbp.in/wiki-search?search=" + inputvalue.value;
        let option = {
            meathod: "GET"
        };
        fetch(url, option)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                let {
                    search_results
                } = data;
                console.log(search_results);
                display(search_results);
            });
    }

}


inputvalue.addEventListener("keydown", searching)