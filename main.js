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
document.addEventListener('DOMContentLoaded', () => {
    // Lấy tất cả các div chứa video
    const videoContainers = document.querySelectorAll('.content-section');

    videoContainers.forEach(container => {
        let isTouchingContainer = false;

        // Sự kiện khi người dùng chạm vào div
        container.addEventListener('touchstart', () => {
            isTouchingContainer = true;
        });

        // Sự kiện khi người dùng rời khỏi div
        container.addEventListener('touchend', (event) => {
            isTouchingContainer = false;

            // Kiểm tra xem người dùng có chạm vào phần tử khác ngoài div không
            const touch = event.changedTouches[0];
            const elementAtTouch = document.elementFromPoint(touch.clientX, touch.clientY);

            if (!container.contains(elementAtTouch)) {
                // Nếu người dùng chạm vào phần tử khác ngoài div, dừng video
                const video = container.querySelector('video');
                if (video) {
                    video.pause();
                }
            }
        });

        // Sự kiện khi chuột rời khỏi div (dành cho máy tính)
        container.addEventListener('mouseleave', () => {
            const video = container.querySelector('video');
            if (video) {
                video.pause();
            }
        });
    });
});