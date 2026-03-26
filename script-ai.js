async function generateImage() {
    let prompt = document.getElementById("prompt").value;
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "⏳ جاري التوليد...";
    try {
        let response = await fetch("https://api.replicate.com/v1/predictions", {
            method: "POST",
            headers: {
                "Authorization": "Token YOUR_API_KEY",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ version: "stable-diffusion", input: { prompt: prompt } })
        });
        let data = await response.json();
        resultDiv.innerHTML = `<img src="${data.output[0]}" />`;
    } catch (error) {
        resultDiv.innerHTML = "❌ حصل خطأ";
    }
}
