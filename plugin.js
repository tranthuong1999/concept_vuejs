export default {
    install(app) {
        app.directive("highlight", {
            mounted(el, binding) {
                console.log("Directive called with value:", binding.value);
                el.style.color = binding.value || "green";
            }
        });
    }
};
