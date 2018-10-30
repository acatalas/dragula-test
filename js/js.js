window.onload = function(){
    var unsortedAnimals = document.getElementById("unsorted");
    var invertebrateAnimals = document.getElementById("invertebrates");
    var vertebrateAnimals = document.getElementById("vertebrates");
    var drake = dragula([unsortedAnimals, vertebrateAnimals, invertebrateAnimals],{
        //besides the containers passed by argument, defines what other elements are 
        //considered containers
        /*isContainer: function(el){
            if (el.className == "container"){
                return true;
            } else{
                return false;
            }
        },*/
        
        //function tests what children of the container are dragable. If the function
        //returns false, the element will not be dragable
        //diferent to invalid, the drag event will be fired but won't begin.
        //invalid elements don't fire a drag event
        //fired whenever an element is clicked
        /*moves: function(el, source, handle, sibling){
            return handle.classList.contains('handle');
        },*/
        
        //make sure that an 
        //element el, 
        //that came from container source, 
        //can be dropped on container target 
        //before a sibling element. 
        //if sibling is null, the element will be placed at end of container
        //even if function returns false, the position where the drag starts will always be
        //a valid place to drop the element
        accepts: function(el, target, source, sibling){
            if (target.id != "unsorted"){
                return sibling==null;
            } else {
                return true;
            }
        },
        
        //if copy is set to true, elements will be copied instead of dropped
        //is called when an element starts being dragged
        //copying prevents original elements from being dragged
        //a copy gets created and that gets dragged
        /*copy: function (el, source) {
            return source.id == "unsorted";
        },*/

        //if true, a copy will be moved to the target container, keeping
        //the original in the source container.
        copy: false,
       
        //if true, and copy is also true, elements can be sorted in the origin container
        copySortSource: false,
        
        //if true, elements dropped outside of any approved containers 
        //are moved back to the source element where the drag event began
        //if false, spilling an element outside of any containers will move the element 
        //back to the drop position previewed by the feedback shadow
        revertOnSpill: true, 
        
        //if false, spilling an element outside of any containers will move the element 
        //back to the drop position previewed by the feedback shadow
        //if true, elements dropped outside of any approved containers are removed from the DOM. 
        //Note that remove events won't fire if copy is set to true.
        removeOnSpill: false,
        
        //direction in which the elements are dropped
        direction: "vertical",

        //if true, the element shouldn't trigger a drag event
        //handle is the element that was clicked
        //el is the element that would be dragged
        invalid: function (el, handle) {
            return handle.tagName == "H2";
        }
    });
    drake.on("drop", function(el){
        el.className = "dropped";
    })
}
