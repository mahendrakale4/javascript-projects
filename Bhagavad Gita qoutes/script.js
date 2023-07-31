const url = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?limit=18";
const config = {
  headers: {
    "X-RapidAPI-Key": "3e27f3f683msh0afba303cdcea22p1e336fjsnd0f3ce338361",
    "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
  },
};

const qoute = document.getElementById("qoute");
const vc = document.getElementById("vc");

function generateRandom(min = 0, max = 18) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;
  return rand;
}


generateqoute() 


    // function generateqoute() {
        //     fetch(url, options)
        //     .then(res => res.json())
        //     .then( res => res[generateRandom()])
        //     .then(data => {
            //         qoute.innerText = data.chapter_summary
            //         vc.innerText = " Summary of Bg : "+ data.chapter_number +"."+ data.verses_count+ " "
            //     })
            
            // }
            
            
async function generateqoute() {
    const response = await fetch(url, config);
    const res = await response.json();
    const res1 = res[generateRandom()];
    setTimeout(()=>{
        qoute.innerText = res1.chapter_summary;
        vc.innerText =
        " Summary of Bg : " + res1.chapter_number + "." + res1.verses_count + " ";

    },1000);
}
