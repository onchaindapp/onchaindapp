document.addEventListener('DOMContentLoaded', function () {
  // URL to navigate to
  const targetURL = 'http://login.html'; // Replace with your target URL

  // Select all case-item-container elements
  const caseItemContainers = document.querySelectorAll('.case-item-container, .case-item-container-2');

  // Add click event listener to each container
  caseItemContainers.forEach(container => {
    container.addEventListener('click', function () {
      window.location.href = targetURL;
    });
  });
});
