<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateLinkRequest;
use App\Http\Resources\LinkResourse;
use App\Jobs\CountRedirectUrlJob;
use App\Jobs\CreateShortUrlJob;
use App\Models\Link;
use Illuminate\Http\Request;

class LinkController extends Controller
{
    public function index()
    {
        $links = Link::all();
        return LinkResourse::collection($links);
    }
    public function store(CreateLinkRequest $request)
    {
        CreateShortUrlJob::dispatch($request->validated()['new_url']);
        return response()->json(['message'=>'Link created successfully']);
    }

    public function redirectedCount(Link $link)
    {
        CountRedirectUrlJob::dispatch($link);
        return response()->json(['message'=>'Link redirected successfully']);
    }
}
