function openTab(tabId, targetId = null) {
    console.log(`Opening tab: ${tabId}`);

    // Ẩn tất cả các tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });

    // Hiển thị tab content được chọn
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    } else {
        console.error(`Tab with id ${tabId} not found!`);
    }

    // Loại bỏ class active từ tất cả các tab button
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Thêm class active vào tab button được chọn
    const selectedButton = document.querySelector(`[onclick="openTab('${tabId}')"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    } else {
        console.error(`Button for tab ${tabId} not found!`);
    }

    // Nếu có targetId, cuộn đến phần đó
    if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Element with id ${targetId} not found!`);
        }
    }
}

// Mặc định hiển thị tab đầu tiên khi trang được tải
document.addEventListener('DOMContentLoaded', () => {
    openTab('tab1');
});
// Dừng video khi không ở phần của video
// Hàm để xử lý dừng video khi không còn trong phạm vi của div chứa
function setupVideoAutoPause() {
    // Lấy tất cả các video và div chứa video
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
      // Lấy phần tử div chứa video (div có thể là phần tử cha của video)
      const container = video.closest('div'); // Giả sử div chứa video là phần tử cha
  
      // Kiểm tra nếu video có container
      if (container) {
        // Tạo IntersectionObserver cho mỗi video
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) {
              // Nếu video không còn trong phạm vi của container, dừng video
              video.pause();
            }
          });
        }, {
          root: container, // Đặt vùng gốc là container của video
          threshold: 0.5 // Khi ít nhất 50% video không còn trong vùng nhìn thấy
        });
  
        // Bắt đầu quan sát video
        observer.observe(video);
      }
    });
  }
  
  // Gọi hàm để thiết lập auto-pause cho tất cả video
  setupVideoAutoPause();
  