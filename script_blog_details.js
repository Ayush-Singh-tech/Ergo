// Comment Section
const commentForm = document.getElementById('commentForm');
const commentsList = document.getElementById('commentsList');
const commentCount = document.getElementById('commentCount');

let totalComments = 0;
// Form submission
commentForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    // Create comment element
    const comment = document.createElement('div');
    comment.classList.add('gap-4', 'py-4');
    comment.innerHTML = `
                    <div>
                <div class="flex items-center justify-between">
                  <div class="flex">
                    <!-- User Avatar -->
                    <img src="https://via.placeholder.com/50" alt="Avatar" class="w-12 h-12 rounded-full object-cover">
                    <div class="ml-3 mb-2">
                      <div class="font-semibold text-lg">${name}</div>
                      <div class="text-gray-400 text-sm">22 Nov 2023</div>
                    </div>
                  </div>
                  <span class="text-orange-600 underline cursor-pointer hover:text-orange-400">Reply</span>
                </div>


                <!-- Comment Details -->
                <div class="">
                  <p class="text-gray-300 mb-2">
                    ${message}
                  </p>
                </div>
                </div>
                `;

    // Add comment to list
    console.log(commentsList)
    commentsList.prepend(comment);


    // Increment and update comments count
    totalComments++;
    commentCount.textContent = totalComments;

    // Clear the form
    commentForm.reset();
  }
});