import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query"; //usemutation handles POST request to the API usequeryclient gives access to the cache so we can update it manually
import { useNavigate } from "react-router-dom";                        
import { postComment } from "../../apis/commentList";
import type { CreateCommentPayload } from "../../types/typeComments"; 
import clsx from "clsx";



function SetterPage() {
  const [form, setForm] = useState<CreateCommentPayload>({
    name: "",
    email: "",      //Holds the current value of all 3 form fields. Starts empty.
    body: "",
  });


  const queryClient = useQueryClient(); //Gets the query client used to manually update the comments cache.
  const navigate = useNavigate();                                       

    // mutate — function we call to trigger the POST request
    // isPending — true while the request is in progress
    // isSuccess — true when request succeeds
    // isError — true when request fails
    // error — contains the error message if it fails
  const {mutate, isPending } = useMutation({
    mutationFn: postComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ 
        queryKey: ["comments"],
        exact: true  // only invalidate the ones whose queryKey is exactly ['comments']
      });
      setForm({ name: "", email: "", body: "" });
      navigate("/");
    },
    onError:(error) => {
      console.error(error);
      window.alert("comment failed");
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form);
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Buat Comment</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Name</label>
          <input
            name="name"
            value={form.name}
             onChange={handleChange}
            placeholder="Nama kamu"
            required
            className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Email</label>
          <input
            name="email"
            type="email"
            value={form?.email}
            onChange={handleChange}
            placeholder="email@contoh.com"
            required
            className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Body</label>
          <textarea
            name="body"
            value={form.body}
            onChange={handleChange}
            placeholder="Isi comment..."
            rows={4}
            required
            className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />
        </div>

      

        <button
          type="submit"
          disabled={isPending}
          className={clsx(
            "w-full py-2.5 rounded-md text-white font-medium transition-colors",
            isPending
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          )}
        >
          {isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default SetterPage;