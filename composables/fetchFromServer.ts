import type { UseFetchOptions } from "#app";
export type FetchTarget = "main-api";

const baseFetch = async (method: string, url: string, target: FetchTarget, opts?: UseFetchOptions<any>) => {
    const urls = {
        "main-api": useRuntimeConfig().MAIN_API_URL || useRuntimeConfig().public.MAIN_API_URL,
    };

    let headers = {};
    // @ts-ignore
    if (process) {
        const h = useRequestHeaders();
        headers = { cookie: h["cookie"] };
    }
    const res = await useFetch(url, {
        baseURL: urls[target],
        server: true,
        credentials: "include",
        headers,
        // @ts-ignore
        method,
        ...opts
    });
    // @ts-ignore
    if (res.error.value) {
        throw createError({
            statusCode: (res.error.value as any)["response"]["status"] || 500,
            message: res.error.value["data"]["message"] || "Something went wrong!"
        });
    }
    return res;
};

export const fetchFromServer = {
    get: (url: string, target: FetchTarget, opts?: UseFetchOptions<any>) => {
        return baseFetch("GET", url, target, opts);
    },
    post: (url: string, target: FetchTarget, opts?: UseFetchOptions<any>) => {
        return baseFetch("POST", url, target, opts);
    }
};

export const handleErrorOnClient = (result: any): boolean => {
    // @ts-ignore
    return !!(result?.error?.value);
    
}
