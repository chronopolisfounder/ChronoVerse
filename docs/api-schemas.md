# ChronoVerse API Schemas

**Version:** 1.0  
**Last Updated:** 2025-07-20

---

## Overview

This document outlines the primary JSON schemas for ChronoVerse API endpoints.  
All responses and requests conform to these standards to ensure platform consistency and type safety.

---

## 1. User Schema

```json
{
  "id": "string",
  "username": "string",
  "email": "string",
  "avatar": "string",
  "createdAt": "ISO8601 timestamp",
  "roles": ["string"],
  "profileComplete": "boolean"
}
```
