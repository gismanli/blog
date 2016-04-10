window.onload = function () {
    var resetTags = function(){
        var tags = document.querySelectorAll('.tagcloud a');
        Array.prototype.forEach.call(tags, function(item){
            item.style.fontSize =  "12px";
            var num = item.innerHTML.length % 5 +1;
            item.className = "";
            item.className += "color" + num;
        })
    }
    resetTags();
}