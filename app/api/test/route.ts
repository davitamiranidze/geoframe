import { connectDB } from "@/lib/mongodb";
import Comment from "@/models/Comment";

export async function GET() {
  await connectDB();

  const comments = await Comment.find().limit(10);
  return Response.json(comments);
}
