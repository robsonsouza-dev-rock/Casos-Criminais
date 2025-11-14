const url = "https://jsonplaceholder.typicode.com/todos/1"
     const output = document.getElementById("output");
     const status = document.getElementById("status");
     function setLoading(on) {
       status.innerHTML = on 
          ? 'Carregando <span class="spinner" aria-hidden="true"></span>'
          : "";
   }
   // --- Exemplo com fetch (promisses / async) ---
   document
    .getElementById("btn-fetch")
    .addEventListener("click", async () => {
       output.textContent = "";
       setLoading(true);
       try {
        // fetch retorna uma Promise que resolve para Response
        const res = await fetch(url, { method: "GET"});
        if (!res.ok) throw new Error
       }
    })