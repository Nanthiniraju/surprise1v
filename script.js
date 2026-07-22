function openLetter() {

    for (let i = 0; i < 40; i++) {

        let sparkle = document.createElement("div");

        sparkle.innerHTML = "✨";

        sparkle.className = "sparkle";

        sparkle.style.left = Math.random() * 100 + "vw";

        sparkle.style.animationDuration =
            (Math.random() * 2 + 1) + "s";

        document.body.appendChild(sparkle);


        setTimeout(function () {

            sparkle.remove();

        }, 3000);

    }


    setTimeout(function () {

        window.location.href = "letter.html";

    }, 2500);

}



function showSecret() {

    const secret = document.getElementById("secretMessage");

    if(secret){

        if(secret.style.display === "block"){

            secret.style.display = "none";

        }
        else{

            secret.style.display = "block";

        }

    }

}