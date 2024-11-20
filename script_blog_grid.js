// Blog Grid

const ApiUrl = "https://api.mediastack.com/v1/news?access_key=1367ec74246c9f81330c99dadf08a807";

// Function to fetch and display blog data
async function fetchBlogs() {
  try {
    const response = await fetch(ApiUrl);
    const blogs = await response.json();
    // console.log(blogs.data[0].title);

    blogs.data.forEach(blog => {
        console.log(blog);
        const blogCard = document.createElement("div");
      blogCard.classList.add("bg-gray-900", "rounded-lg", "shadow-lg", "overflow-hidden");
      blogCard.innerHTML=`
                      <div class="relative bg-gray-500">
                        <img src="${blog.image}" alt="Nature class="w-full h-48 object-cover group-hover:opacity-75 transition duration-200">
                        <div class="absolute top-[95%] left-4 bg-red-500 text-xs px-2 py-1 rounded text-white">${blog.published_at}</div>
                      </div>
                      <div class="p-4">
                        <h2 class="text-xl font-bold mb-2">${blog.category}</h2>
                        <p class="text-gray-400 text-sm mb-4">${blog.description}</p>
                    <a href="#" target="_blank" class="text-blue-500 font-semibold hover:underline">${blog.url}</a>
                      </div>`
document.getElementById('blogGrid').appendChild(blogCard)

    });
 } catch (error) {
    console.error("Error fetching blog data:", error);
  }
}

// Call the function to load blogs
fetchBlogs();


