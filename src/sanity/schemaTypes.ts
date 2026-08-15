import { defineArrayMember, defineField, defineType } from "sanity";

const post = defineType({
  name: "post",
  title: "Bài viết",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Tiêu đề", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Đường dẫn", type: "slug", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "excerpt", title: "Mô tả ngắn", type: "text", rows: 3 }),
    defineField({ name: "coverImage", title: "Ảnh đại diện", type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "Mô tả ảnh", type: "string" }] }),
    defineField({ name: "category", title: "Chuyên mục", type: "string", initialValue: "Tin tức" }),
    defineField({ name: "publishedAt", title: "Ngày xuất bản", type: "datetime" }),
    defineField({
      name: "body",
      title: "Nội dung",
      type: "array",
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({ type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "Mô tả ảnh", type: "string" }] }),
      ],
    }),
  ],
  preview: { select: { title: "title", media: "coverImage", subtitle: "category" } },
});

export const schemaTypes = [post];
