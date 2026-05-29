# Changelog

All notable changes to this project will be documented in this file.

## [v1.0.0-alpha] - 2026-02-19
### Added
- Initial project setup with Next.js 15 and Tailwind CSS.
- Global Layouts using Route Groups `(main)` and `(public)`.
- Custom Scanline Overlay component for CRT terminal effect.
- Public pages: Landing, Login, Subscriptions, Syllabus.
- Dashboard pages: Learning Telemetry, Active Labs, Profile, Settings, Help.

### Changed
- Refactored `GlobalLayout` into specific Route Group layouts to avoid sidebar bleeding.
- Cleaned up default Next.js boilerplate (removed unused SVGs and redundant folders).

### Fixed
- Next.js development indicator "N" hidden from the UI via `next.config.ts`.