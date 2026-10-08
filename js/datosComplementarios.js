 function openDocument(file, title) {
     const modal = document.getElementById("documentModal");
     const frame = document.getElementById("documentFrame");
     const modalTitle = document.getElementById("modalTitle");
     modalTitle.innerHTML = title;
     frame.src = file;
     modal.classList.remove("hidden");
     modal.classList.add("flex");
     document.body.style.overflow = "hidden";
    }
    function closeDocument() {
        const modal = document.getElementById("documentModal");
        const frame = document.getElementById("documentFrame");
        frame.src = "";
        modal.classList.add("hidden");
        modal.classList.remove("flex");
        document.body.style.overflow = "";
    }
    /* Cerrar haciendo clic fuera del documento */
    document.getElementById("documentModal")
    .addEventListener("click", function(event) {
        if (event.target === this) {
            closeDocument();
        }
    });
    /* Cerrar con la tecla ESC */
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            closeDocument();
        }
    });