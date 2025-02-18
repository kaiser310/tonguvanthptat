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
    // Lấy tất cả các video trên trang
    const videos = document.querySelectorAll('video');
  
    // Duyệt qua từng video
    videos.forEach(video => {
      // Tạo IntersectionObserver cho mỗi video
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          // Kiểm tra nếu video không còn trong phạm vi hiển thị
          if (!entry.isIntersecting) {
            video.pause();  // Dừng video khi không còn trong phạm vi
          }
        });
      }, {
        root: null,  // null có nghĩa là theo dõi với viewport của trình duyệt
        threshold: 0.5  // Khi ít nhất 50% video không còn trong phạm vi nhìn thấy
      });
  
      // Bắt đầu quan sát video
      observer.observe(video);
    });
  }
  
  // Gọi hàm để thiết lập auto-pause cho tất cả video
  setupVideoAutoPause();
  