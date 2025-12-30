/* ==========================================
   AFRICAN EXODUS — VAULT INCLUDE SYSTEM
   Loads header, nav, footer
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {

    function loadInclude(id, file) {
        const target = document.getElementById(id);
        if (!target) return;

        fetch(file)
            .then(response => response.text())
            .then(data => {
                target.innerHTML = data;
            })
            .catch(() => {
                /* Silent failure — archive must not complain */
            });
    }

    loadInclude("vault-header", "/african-exodus-vault/header.html");
    loadInclude("vault-nav", "/african-exodus-vault/nav.html");
    loadInclude("vault-footer", "/african-exodus-vault/footer.html");

});
