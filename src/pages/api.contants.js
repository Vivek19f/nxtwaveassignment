import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";

export const fetchResouces = () => {
  return axios.get(
    "https://media-content.ccbp.in/website/react-assignment/resources.json"
  );
};

export const addResources = (data) => {
  return axios.post(
    "https://media-content.ccbp.in/website/react-assignment/add_resource.json",
    { data }
  );
};

export const useResourcesData = () => {
  return useQuery("fetchResources", fetchResouces, {
    onSuccess: () => {},
    onError: (error) => {
      toast.error("Try again later", {
        position: "bottom-center",
        className: "toast-error",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    },
  });
};

export const useAddResources = () => {
  return useMutation(addResources, {
    onSuccess: () => {
      toast.success("Successfully Created", {
        position: "bottom-center",
        className: "toast-error",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    },
    onError: (error) => {
      toast.error(error.message, {
        position: "bottom-center",
        className: "toast-error",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    },
  });
};
