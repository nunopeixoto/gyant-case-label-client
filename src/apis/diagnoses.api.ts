import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreateDiagnosisRequest } from "../dto/create-diagnosis-request.dto";
import { Diagnosis } from "../models/diagnosis.model";

export const diagnosesApi = createApi({
  reducerPath: "diagnosesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/diagnoses",
  }),
  endpoints: (build) => ({
    createDiagnosis: build.mutation<Diagnosis, CreateDiagnosisRequest>({
      query: (createDiagnosisRequest) => ({
        url: "/",
        method: "POST",
        body: createDiagnosisRequest,
      }),
    }),
  }),
});

export const { useCreateDiagnosisMutation } = diagnosesApi;