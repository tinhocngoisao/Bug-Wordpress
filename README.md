# Headhunt Pro

Kho lưu trữ cho công ty headhunt chuyên tuyển dụng nhân sự công nghệ tại Việt Nam.

## Nội dung
- Website tĩnh tại thư mục `site/`
- Triển khai tự động qua GitHub Pages (workflow `gh-pages.yml`)

## Xem website
Sau khi bật GitHub Pages cho branch mặc định, website sẽ có tại `https://<USERNAME>.github.io/<REPO>/site/` hoặc root tuỳ cấu hình Pages. Trong repo này các liên kết dùng đường dẫn tuyệt đối `/site/...` để tương thích GitHub Pages.

## Phát triển
- Chỉnh sửa HTML/CSS/JS trong `site/`
- Dữ liệu mẫu việc làm trong `site/data/jobs.json`

## Triển khai
- Mỗi khi có thay đổi trong `site/**`, workflow sẽ build và deploy lên Pages.

## Giấy phép
Phát hành theo giấy phép MIT. Xem `LICENSE`.
