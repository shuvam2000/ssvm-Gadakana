
        document.addEventListener("DOMContentLoaded", function() {
            loadPage('./pages/home.html'); // Load the home page by default

            // Function to load page content into the .content div
            function loadPage(page) {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        document.querySelector('.content').innerHTML = this.responseText;
                    }
                };
                xhttp.open("GET", page, true);
                xhttp.send();
            }

            // Handle navigation clicks
            var navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(function(link) {
                link.addEventListener('click', function(event) {
                    event.preventDefault(); // Prevent default link behavior
                    var page = this.getAttribute('href');
                    loadPage(page);
                });
            });
        });

    
        
        
        document.addEventListener("DOMContentLoaded", function() {
            // Function to scroll the text horizontally
            function scrollText() {
                var scrollingElement = document.querySelector('.row'); 
                scrollingElement.scrollLeft += 1; // Adjust speed by changing the increment value
                if (scrollingElement.scrollLeft >= scrollingElement.scrollWidth - scrollingElement.clientWidth) {
                    scrollingElement.scrollLeft = 0; // Reset to the beginning once reached the end
                }
            }
    
            // Call the scrollText function every 20 milliseconds (adjust for desired speed)
            setInterval(scrollText, 20);
        });
   

    
        function searchContent() {
            var searchQuery = document.getElementById("searchInput").value.toLowerCase();
            var content = document.querySelector('.content');

            // Perform search logic here
            // For demonstration, let's assume the search query matches some content
            // You can replace this with your actual search logic
            var matchedContent = "<h2>Search Results</h2><p>This is the content that matches your search query.</p>";

            // Update the content with matched results
            content.innerHTML = matchedContent;
        }