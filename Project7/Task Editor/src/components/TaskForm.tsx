import { useForm, type FieldValues } from "react-hook-form";
import { useRef, type FormEvent, useState, useEffect } from "react";

interface Props {
  priorities: string[];
  onFormSubmit: (data: FieldValues) => void;
}
const TaskForm = ({ priorities, onFormSubmit }: Props) => {
  const [tags, setTags] = useState<string[]>([]);
  const tagRef = useRef<HTMLInputElement>(null);
  const handleAddTags = (event: FormEvent) => {
    event.preventDefault();
    if (tagRef.current !== null) {
      // console.log(tagRef.current.value);
      setTags([...tags, tagRef.current.value]);
      tagRef.current.value = "";
    }
  };

  const { register, handleSubmit, setValue, reset } = useForm();
  useEffect(() => {
    setValue("tags", tags);
  }, [tags]);
  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          onFormSubmit(data);
          reset();
          setTags([]);
        })}
      >
        <div className="form-group mb-3">
          <label htmlFor="title">Title</label>
          <input
            {...register("task")}
            id="task"
            type="text"
            className="form-control"
            placeholder="Enter Title"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="priority">Priority</label>
          <select
            {...register("priority")}
            name="priority"
            id="priority"
            className="form-control"
          >
            <option value="">Select Priority</option>
            {priorities.map((priority, index) => (
              <option key={index}>{priority}</option>
            ))}
          </select>
        </div>
        <label htmlFor="tags">Tags</label>
        <div className="input-group mb-3">
          <input
            ref={tagRef}
            id="addtags"
            type="text"
            className="form-control"
            placeholder="Add Tags..."
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={handleAddTags}
            >
              Add+
            </button>
          </div>
        </div>
        <div className="form-group mb-3">
          {/* Hidden input to store tags in form */}
          <input type="hidden" {...register("tags")} />{" "}
        </div>
        <div className="form-group mb-3">
          <div
            className="form-control"
            style={{ height: "100px", overflowY: "auto" }}
          >
            {tags.map((tag, index) => (
              <div key={index}>[ {tag} ]</div>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default TaskForm;
