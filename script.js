/* ================= CONFETTI ================= */
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti =document.createElement("div");
        const emojis = ["🎉","🎊","✨","❤","🎈","💖"];
        confetti.innerHTML =
        emojis[
            Math.floor(
                Math.random() * emojis.length
            )
        ]
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-50px";
        confetti.style.fontSize = Math.random() * 20 + 15 + "px";
        confetti.style.zIndex = "9999";
        confetti.style.pointerEvents = "none";
        document.body.appendChild(confetti);
        const duration = Math.random() * 3 + 2;
        confetti.animate(
            [
                { 
                transform:
                "translateY(0) rotate(0deg)"
            },
            {
                transform:
                "translateY(110vh) rotate(720deg)"
            }
        ],
        {
            duration: duration * 1000,
            easing: "linear"
        }
    );
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}
/* ================= FINAL SURPRISE ================= */
function finalSurprise() {
// Multiple confetti explosions
createConfetti();
setTimeout(() => {
createConfetti();
}, 800);
setTimeout(() => {
alert("🎉🎂 HAPPY BIRTHDAY! ��🎉\n\n" +
    "❤ You are not just my sister...\n\n" +
    "You are one of the most important " +"people in my life! ❤\n\n" +
    "Thank you for all the memories, " +
    "laughter and happiness!❤ \n\n "
    );
}, 500);
}