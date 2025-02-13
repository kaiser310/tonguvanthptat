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