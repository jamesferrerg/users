import React from "react";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, savingUser } from "../../store/slices";

export const CreatePage = () => {
  const { formState, onInputChange, onResetForm, name, job } = useForm({
    name: "",
    job: "",
  });

  const dispatch = useDispatch();
  const { isSaving, id } = useSelector((state) => state.users);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !job.trim()) return;
    dispatch(savingUser(name, job));
    onResetForm();
  };

  const clean = () => {
    dispatch(clearUser());
  }

  return (
    <div className="container">
      <h1>Create user</h1>
      <hr />
      <div className="col-md-4">
        <form>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="name"
              name="name"
              value={name}
              onChange={onInputChange}
              required
            />
          </div>
          <div className="form-text px-2">Add a name</div>

          <div className="pt-3">
            <input
              type="text"
              className="form-control"
              placeholder="job"
              name="job"
              value={job}
              onChange={onInputChange}
              required
            />
          </div>
          <div className="form-text px-2 pb-2">Add a job</div>
          <button type="button" className="btn btn-primary" onClick={onSubmit}>
            Save
          </button>
        </form>
        {id && (
          <div className="alert alert-success mt-2 alert-dismissible">
            Saved succesfully with id: <strong>{id}</strong>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={clean}
            ></button>
          </div>
        )}
      </div>
    </div>
  );
};
